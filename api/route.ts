export async function getQuestions() {
  const res = await fetch(`https://${process.env.BE_PRODUCTION}/questions?limit=50`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

export async function postQuestion(data: SubmitQuestionType) {
  try {
    const res = await fetch(`https://${process.env.BE_PRODUCTION}/userquestion`, {
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

export async function getUserQuestions() {
  try {
    const res = await fetch(`https://${process.env.BE_PRODUCTION}/userquestions`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const result = await res.json();
    return result;
  } catch {
    throw new Error("Failed to fetch data");
  }
}
