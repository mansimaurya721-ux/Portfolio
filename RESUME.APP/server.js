const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/resumedb");

const Resume = mongoose.model("Resume", {
    name: String,
    email: String,
    phone: String,
    skills: String,
    education: String,
    experience: String
});

app.get("/", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html>
<head>
<title>Resume Builder Full Stack</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
<style>
body{font-family:Arial;background:#f2f2f2;padding:20px}
input,textarea{width:100%;padding:8px;margin:5px 0}
button{padding:10px;margin:5px 0}
#resume{background:white;padding:20px;margin-top:20px}
</style>
</head>

<body>

<h2>Full Stack Resume Builder</h2>

<input id=name placeholder="Name">
<input id=email placeholder="Email">
<input id=phone placeholder="Phone">
<textarea id=skills placeholder="Skills"></textarea>
<textarea id=education placeholder="Education"></textarea>
<textarea id=experience placeholder="Experience"></textarea>

<button onclick="preview()">Preview</button>
<button onclick="save()">Save API</button>
<button onclick="pdf()">Download PDF</button>

<div id="resume"></div>

<script>
function data(){
return {
name:name.value,
email:email.value,
phone:phone.value,
skills:skills.value,
education:education.value,
experience:experience.value
}
}

function preview(){
let d=data();
resume.innerHTML=\`
<h2>\${d.name}</h2>
<p>\${d.email} | \${d.phone}</p>
<h3>Skills</h3><p>\${d.skills}</p>
<h3>Education</h3><p>\${d.education}</p>
<h3>Experience</h3><p>\${d.experience}</p>
\`;
}

async function save(){
let r = await fetch("/api/resume",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(data())
});
let j = await r.json();
alert("Saved ID: "+j._id);
}

function pdf(){
html2pdf().from(resume).save();
}
</script>

</body>
</html>
`)
});

app.post("/api/resume", async (req, res) => {
    const r = await Resume.create(req.body);
    res.json(r);
});

app.listen(3000, () => console.log("Server http://localhost:3000"));
