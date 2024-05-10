export async function getQuestions() {
  const res = await fetch("http://localhost:8080/questions?limit=50");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

export async function postQuestion(data: SubmitQuestionType) {
  try {
    const res = await fetch("http://localhost:8080/userquestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
  } catch {
    throw new Error("Failed to post data");
  }
}
