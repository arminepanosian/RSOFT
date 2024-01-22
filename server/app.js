require("dotenv").config();
const path = require("path");
const mongoose = require("mongoose");
const url = process.env.MONGOOSE_URL;
const { verifyToken } = require("./middleware/auth");
const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const { RewievsModel } = require("./schemes/schemes");

mongoose.connect(url);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(bodyParser.json());

const db = mongoose.connection;

db.on("error", () => {
  console.log("MongoDB connection error");
});
db.once("open", () => {
  console.log("connected to MongoDB");
});

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use SSL
  auth: {
    user: "raztiracvyan1@gmail.com",
    pass: "sfzz ofbh rqoy nmdv",
  },
  tls: {
    rejectUnauthorized: false, // Bypass SSL certificate verification
  },
});

app.post("/reviews", async (req, res) => {
  try {
    const { name, lastName, position, stars, description } = req.body;

    if (!description) {
      return res.status(400).json({ error: "Missing text" });
    }

    const rewiev = new RewievsModel({
      name,
      lastName,
      position,
      stars,
      description,
    });

    await rewiev.save();

    res.status(201).json({ message: "Review added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.get("/reviewsAll", async (req, res) => {
  try {
    const allReviews = await RewievsModel.find({ confirmed: true });
    res.status(200).json(allReviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/reviewsTop", async (req, res) => {
  try {
    const topReviews = await RewievsModel.find({ confirmed: true }).sort({ _id: -1 }).limit(2);
    res.status(200).json(topReviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.delete("/deleteReview/:id", async (req, res) => {
  try {
    const reviewId = req.params.id;
    const result = await RewievsModel.findByIdAndDelete(reviewId);

    if (result) {
      res.status(200).json({ message: "Обзор успешно удален" });
    } else {
      res.status(404).json({ message: "Обзор не найден" });
    }
  } catch (error) {
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

app.post("/admin/register", async (req, res) => {
  try {
    const { name, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await new AdminModel({ name, password: hashedPassword });
    admin.save();
    jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "1h",
    });
    res.send("admin is here");
  } catch (err) {
    console.log(err);
    res.send("error");
  }
});

app.get("/admin", verifyToken, async (req, res) => {
  try {
    const user = await AdminModel.findById(req.userId);
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }
    const token = req.query.token || req.headers["x-access-token"];
    res.json({
      token: token,
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/admin/login", async (req, res) => {
  try {
    const { name, password } = req.body;

    if (!name || !password) {
      return res.status(400).json({ error: "Missing email or password" });
    }
    const user = await AdminModel.findOne({ name });
    if (!user) {
      return res.status(401).json({ error: "invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid or password" });
    }
    const token = jwt.sign({ userId: user._id }, "your-secret-key", {
      expiresIn: "1h",
    });
    res.redirect(`/admin?token=${token}`);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "internal server error" });
  }
});

app.post("/sendMessage", async (req, res) => {
  try {
    const { name, lastName, email, phone, message } = req.body;
    if (!name || !lastName || !email || !phone || !message) {
      return res.status(400).json({ error: "require failed" });
    }

    const mailOptions = {
      from: "raztiracvyan1@gmail.com",
      to: "rsoft.web@mail.ru",
      subject: "Message from R'SOFT's user",
      html: `
        <h1>From ${name} ${lastName}</h1>
        <div>
            <div>email: ${email}</div>
            <div>phone: ${phone}</div>
            <div>message: ${message}</div>
        </div>
      `,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
      }
      console.log("email sent" + info.response);
    });
  } catch (err) {
    res.status(200).json({ error: err });
  }
});

app.post("/addStaffMember", async (req, res) => {
  try {
    const { name, lastName, position, about} = req.body;
    console.log(req.files);
    console.log(req.body);
    console.log(req.body.name);


    res.status(201).json({ message: "Review added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(process.env.APP_LISTEN);
