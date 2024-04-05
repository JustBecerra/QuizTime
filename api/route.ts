export async function getQuestions() {
  const res = await fetch("http://localhost:8080/questions?limit=50");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}
