const user = {
  title: "PROSOFT",
  body: "DONE",
  userId: 1
};

async function request() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  });
  if (response.ok) {
    let data = await response.json();
    console.log(data);
    return data;
  } else {
    console.log("error", response.status);
  }
}

let result = request();
console.log(result);