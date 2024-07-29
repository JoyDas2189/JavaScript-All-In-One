// Without Promise. Also called as callback hell...

const madePayment = true;
const marks = 80;
const certified = true;

function enroll(callback) {
  console.log("Enrollment Process Ingoing...");

  setTimeout(function () {
    if (madePayment) {
      callback();
    } else {
      console.log("You Have to complete your payment.");
    }
  }, 2000);
}

function progress(callback) {
  console.log("Course Progess Going On...");

  setTimeout(function () {
    if (marks >= 80) {
      callback();
    } else {
      console.log("Your Marks is Too Low");
    }
  }, 3000);
}

function certification(callback) {
  console.log("Certification Process Ongoing....");

  setTimeout(function () {
    if (certified) {
      console.log("Congratulation!!. Move forward to get a job");
      callback();
    } else {
      console.log("You Didn't Got the Certificate.");
    }
  }, 2000);
}

function findingJob() {
  console.log("Job Finding Process Ongoing...");

  setTimeout(function () {
    console.log("You Got a Job");
  }, 3000);
}

enroll(function () {
  progress(function () {
    certification(findingJob);
  });
});
