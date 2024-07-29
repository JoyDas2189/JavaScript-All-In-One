const madePayment = true;
const marks = 80;
const certified = true;
const properInterview = true;

//creating Promise..
function enroll() {
  console.log("Enrollment Process Ongoing...");
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (madePayment) {
        resolve();
      } else {
        reject("You Have To Enroll For This Course.");
      }
    }, 3000);
  });
  return promise;
}
function progress() {
  console.log("Progress Process Ongoing...");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (marks >= 80) {
        resolve();
      } else {
        reject("You Mark Is Not Satisfactory.");
      }
    }, 3000);
  });
  return promise;
}

function certification() {
  console.log("Certification Process Ongoing...");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (certified) {
        resolve("Congratulations!! You Got a The Certificate.");
      } else {
        reject("You Haven't got The Certificate Yet.");
      }
    }, 3000);
  });
  return promise;
}

function findingJob() {
  console.log("Finding Job Process Ongoing...");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (properInterview) {
        resolve("Congrats!! You Got A Job.");
      } else {
        reject("Better Luck Next Time.");
      }
    }, 3000);
  });
  return promise;
}

// Calling Await
async function course() {
  try {
    await enroll();
    await progress();
    await certification();

    let value = await findingJob();
    console.log(value);
  } catch (err) {
    console.log(err);
  }
}
course();
