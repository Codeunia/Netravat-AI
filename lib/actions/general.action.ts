"use server";

import { db } from "@/firebase/admin";
import { Feedback, GetFeedbackByInterviewIdParams } from "@/types";

export async function getFeedbackByInterviewId(
  params: GetFeedbackByInterviewIdParams
): Promise<Feedback | null> {
  try {
    const { userId, interviewId } = params;

    const feedbackRef = await db
      .collection("users")
      .doc(userId)
      .collection("interviews")
      .doc(interviewId)
      .collection("feedbacks")
      .get();

    if (feedbackRef.empty) return null;

    const feedback = feedbackRef.docs[0].data();

    return {
      id: feedbackRef.docs[0].id,
      interviewId: feedback.interviewId,
      totalScore: feedback.totalScore,
      categoryScores: feedback.categoryScores,
      strengths: feedback.strengths,
      areasForImprovement: feedback.areasForImprovement,
      finalAssessment: feedback.finalAssessment,
      createdAt: feedback.createdAt.toDate(),
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}
