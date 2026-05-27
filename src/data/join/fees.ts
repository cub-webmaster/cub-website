type FeeType = 'student' | 'non-student' | 'beginner' | 'rental' | 'rental-deposit';

export const fees: Record<FeeType, number> = {
	student: 90,
	'non-student': 120,
	beginner: 10,
	rental: 20,
	'rental-deposit': 50
};
