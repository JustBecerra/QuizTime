export async function getQuestions() {
  const res = await fetch("http://localhost:8080/questions?limit=50");
  const data = await res.json();
  return data;
}
