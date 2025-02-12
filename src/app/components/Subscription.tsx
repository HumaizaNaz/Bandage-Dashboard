'use client'

type Plan = "free" | "standard" | "premium"

interface User {
  id: string
  name: string
  subscribedPlan: Plan
}

const Subscription = () => {
  // Users data with different subscription plans
  const users: User[] = [
    { id: "user-1", name: "Mark Jones", subscribedPlan: "free" },
    { id: "user-2", name: "Emily Davis", subscribedPlan: "standard" },
    { id: "user-3", name: "James Lee", subscribedPlan: "premium" },
    { id: "user-4", name: "Olivia Smith", subscribedPlan: "premium" },
    { id: "user-5", name: "John Doe", subscribedPlan: "standard" },
    { id: "user-6", name: "Sarah Brown", subscribedPlan: "free" },
    { id: "user-7", name: "Chris Johnson", subscribedPlan: "standard" },
    { id: "user-8", name: "Anna Williams", subscribedPlan: "free" },
    { id: "user-9", name: "David Miller", subscribedPlan: "premium" },
    { id: "user-10", name: "Sophie Lee", subscribedPlan: "standard" },
    { id: "user-11", name: "Michael Taylor", subscribedPlan: "free" },
    { id: "user-12", name: "Isabella Martinez", subscribedPlan: "premium" },
  ]

  // Plan data with features
  const plans = [
    {
      id: "free",
      name: "Free Plan",
      price: "$0/month",
      features: [
        "Access to basic content",
        "Limited support",
        "1 GB storage"
      ]
    },
    {
      id: "standard",
      name: "Standard Plan",
      price: "$10/month",
      features: [
        "Access to premium content",
        "Priority support",
        "10 GB storage"
      ]
    },
    {
      id: "premium",
      name: "Premium Plan",
      price: "$30/month",
      features: [
        "Access to all content",
        "24/7 support",
        "Unlimited storage",
        "Exclusive content"
      ]
    }
  ]

  return (
    <div className="space-y-6 p-8">
      {/* Users and their subscription plans */}
      <h2 className="text-3xl mt-8">Users and Their Subscription Plans</h2>
      <div className="space-y-4 mt-6">
        {users.map((user) => {
          const userPlan = plans.find(plan => plan.id === user.subscribedPlan)
          return (
            <div key={user.id} className="border-2 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold">{user.name}</h3>
              <p className="text-lg text-gray-600">Subscribed to: {userPlan?.name}</p>
              <div className="mt-4">
                <ul className="space-y-2">
                  {userPlan?.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Subscription
