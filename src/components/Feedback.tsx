import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const FeedbackContainer = styled.div`
  background-color: #34354a;
  padding: 1rem;
  border-radius: 8px;
  overflow-y: auto;
  max-height: 460px; /* Adjust the height as needed */
`;

const FeedbackTitle = styled.h3`
  margin: 0 0 1rem 0;
`;

const FeedbackList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FeedbackItem = styled.div`
  background-color: #2d2d3a;
  padding: 1rem;
  border-radius: 8px;
`;

const FeedbackHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const FeedbackAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #6c63ff;
  margin-right: 1rem;
`;

const FeedbackText = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeedbackName = styled.span`
  font-weight: bold;
`;

const FeedbackRating = styled.div`
  display: flex;
  align-items: center;
  color: #f4c150;
`;

const FeedbackMessage = styled.p`
  margin: 0;
`;

const feedbacks = [
  {
    name: "Jenny Wilson",
    rating: 5,
    message:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
  },
  {
    name: "Dianne Russell",
    rating: 5,
    message:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
  },
  {
    name: "Devon Lane",
    rating: 4,
    message:
      "Normally we are wings, but theirs are lean meaty and tender, and without question, the best we’ve had in a long time.",
  },
  {
    name: "Eleanor Pena",
    rating: 5,
    message:
      "The steak was cooked to perfection and the sides were delicious. Highly recommend!",
  },
  {
    name: "Floyd Miles",
    rating: 3,
    message:
      "The service was a bit slow, but the food made up for it. The pasta dishes are highly recommended.",
  },
  {
    name: "Marvin McKinney",
    rating: 4,
    message:
      "Great atmosphere and friendly staff. The cocktails are a must-try.",
  },
  {
    name: "Kathryn Murphy",
    rating: 5,
    message:
      "The desserts are to die for! Highly recommend the chocolate lava cake.",
  },
  {
    name: "Bessie Cooper",
    rating: 4,
    message:
      "A bit pricey, but the quality of the food and service justifies it. Would visit again.",
  },
  {
    name: "Ronald Richards",
    rating: 5,
    message:
      "An unforgettable dining experience. The chef’s specials are always a hit.",
  },
  {
    name: "Courtney Henry",
    rating: 3,
    message:
      "The ambiance is nice, but the food was just okay. Expected more for the price.",
  },
  {
    name: "Arlene McCoy",
    rating: 4,
    message:
      "Loved the variety in the menu. The seafood platter is a must-try.",
  },
];

export const Feedback: React.FC = () => {
  return (
    <FeedbackContainer>
      <FeedbackTitle>Customer's Feedback</FeedbackTitle>
      <FeedbackList>
        {feedbacks.map((feedback, index) => (
          <FeedbackItem key={index}>
            <FeedbackHeader>
              <FeedbackAvatar />
              <FeedbackText>
                <FeedbackName>{feedback.name}</FeedbackName>
                <FeedbackRating>
                  {Array.from({ length: feedback.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </FeedbackRating>
              </FeedbackText>
            </FeedbackHeader>
            <FeedbackMessage>{feedback.message}</FeedbackMessage>
          </FeedbackItem>
        ))}
      </FeedbackList>
    </FeedbackContainer>
  );
};
