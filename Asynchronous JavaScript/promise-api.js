const p = Promise.resolve({ id: 1 });
p.then((result) => console.log(result));

const p2 = Promise.reject(new Error("reson of the rejection..."));
p2.catch((error) => console.log(error));
