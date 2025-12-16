import { realGoogleReviews, realReviewsStats } from "./real-google-reviews"

export const generateSampleReviews = () => {
  // Return real Google reviews as primary data
  return realGoogleReviews

  const firstNames = [
    "Rajesh",
    "Priya",
    "Amit",
    "Sneha",
    "Vikram",
    "Anita",
    "Rahul",
    "Kavita",
    "Sanjay",
    "Meera",
    "Arjun",
    "Deepa",
    "Karan",
    "Neha",
    "Rohan",
    "Pooja",
    "Anil",
    "Ritu",
    "Suresh",
    "Manjari",
    "Vivek",
    "Shreya",
    "Nikhil",
    "Swati",
    "Akash",
    "Divya",
    "Manoj",
    "Sunita",
    "Gaurav",
    "Nisha",
  ]

  const lastNames = [
    "Kumar",
    "Sharma",
    "Singh",
    "Gupta",
    "Verma",
    "Patel",
    "Mehta",
    "Joshi",
    "Shah",
    "Das",
    "Roy",
    "Ghosh",
    "Chatterjee",
    "Banerjee",
    "Mukherjee",
    "Chakraborty",
    "Sengupta",
    "Bose",
  ]

  const reviewTexts = [
    "Excellent service! Dr. and the team are very professional and caring. The clinic is clean and well-maintained. Highly recommend for all dental needs.",
    "Had a root canal treatment done here. The procedure was painless and the staff made me feel comfortable throughout. Great experience!",
    "Best dental clinic in Kolkata! The doctor is very experienced and explains everything clearly. The staff is friendly and the clinic has modern equipment.",
    "I was scared of dental procedures but the team here made it so easy. Very gentle and professional approach. The clinic is also very hygienic.",
    "Amazing service! Got my teeth cleaning done and the results are fantastic. The doctor is very skilled and the prices are reasonable too.",
    "Highly professional clinic with state-of-the-art facilities. The doctor takes time to explain the treatment plan. Very satisfied with the dental implant procedure.",
    "Great experience with orthodontic treatment. The braces were fitted perfectly and the follow-up care has been excellent. The staff is very cooperative.",
    "The clinic ambiance is very soothing and doesn't feel like a typical dental clinic. The treatment was painless and the results exceeded my expectations.",
    "I've been coming here for years and have always received top-notch care. The doctor is patient, skilled, and genuinely cares about oral health.",
    "Fantastic dental clinic! The team is professional, the equipment is modern, and the treatment is affordable. My whole family comes here now.",
    "Had a tooth extraction done here and it was completely painless. The doctor's expertise is commendable. Highly recommend this clinic!",
    "Very impressed with the quality of service. The clinic is well-equipped and the staff is courteous. Got my crown done here and it looks natural.",
    "Best decision to choose this clinic for my dental needs. The doctor is highly skilled and the clinic maintains excellent hygiene standards.",
    "Professional and caring staff. The treatment was explained in detail and executed perfectly. Very happy with my dental cleaning results.",
    "Excellent clinic with a personal touch. The doctor remembers patients and their dental history. This shows genuine care and dedication.",
    "I was recommended this clinic by a friend and I'm so glad I came. The service is outstanding and the results speak for themselves.",
    "State-of-the-art dental clinic with expert doctors. Had cosmetic dentistry done here and couldn't be happier with the transformation!",
    "Very patient-friendly clinic. The doctor takes time to address all concerns and doubts. The treatment plan is always reasonable and effective.",
    "Exceptional dental care! The clinic uses latest technology and the doctor is highly qualified. My family's trusted dental care provider.",
    "Had scaling and polishing done. The procedure was gentle and thorough. The clinic is also conveniently located with good parking facilities.",
  ]

  const reviews = []
  const now = Date.now()

  for (let i = 0; i < 120; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    const rating = Math.random() > 0.15 ? 5 : Math.random() > 0.5 ? 4 : 3
    const daysAgo = Math.floor(Math.random() * 365)
    const date = new Date(now - daysAgo * 24 * 60 * 60 * 1000)

    const getTimeAgo = (days: number) => {
      if (days === 0) return "Today"
      if (days === 1) return "Yesterday"
      if (days < 7) return `${days} days ago`
      if (days < 30) return `${Math.floor(days / 7)} weeks ago`
      if (days < 365) return `${Math.floor(days / 30)} months ago`
      return `${Math.floor(days / 365)} years ago`
    }

    reviews.push({
      id: `review-${i + 1}`,
      author: `${firstName} ${lastName}`,
      rating,
      text: reviewTexts[Math.floor(Math.random() * reviewTexts.length)],
      date: date.toISOString(),
      time: getTimeAgo(daysAgo),
      source: Math.random() > 0.2 ? "google" : "site",
      postedOnGoogle: Math.random() > 0.3,
      avatar: undefined,
    })
  }

  return reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export const calculateStats = (reviews: any[]) => {
  // If we have real reviews, use the real stats
  if (reviews.length >= 70) {
    return realReviewsStats
  }

  const totalReviews = reviews.length
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0)
  const averageRating = totalReviews > 0 ? totalRating / totalReviews : 0
  const fiveStarCount = reviews.filter((r) => r.rating === 5).length
  const fiveStarPercentage = totalReviews > 0 ? Math.round((fiveStarCount / totalReviews) * 100) : 0

  return {
    averageRating: Number(averageRating.toFixed(1)),
    totalReviews,
    fiveStarPercentage,
  }
}
