type FeeType = "student" | "non-student" | "beginner"

export const fees: Record<FeeType, number> = {
    "student": 90,
    "non-student": 120,
    "beginner": 10
}