// 1. Работа с простыми типами

function concat(firstString: string, secondString: string): string {
	return firstString + secondString;
}

console.log(concat('Hello ', 'World')) // -> Hello World;

// 2. Работа с интерфейсами

interface HomeTask {
	howIDoIt: string,
	someArray: Array<string | number>,
	withData?: Array<HomeTask>
}

const MyHomeTask: HomeTask = {
	howIDoIt: 'I Do It Wel',
	someArray: ['string one', 'string two', 42],
	withData: [
		{
			howIDoIt: 'I Do It Wel',
			someArray: ['string one', 23],
		},
	],
}

// 3. Типизация функций, используя Generic

interface MyArray<T> {
	[n: number]: T;

	map<U>(callbackFn: (element: T) => U): Array<U>;

	reduce<U>(callbackFn: (accumulator: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue?: U | T): U;
}

const array: Array<number> = [1, 2, 3];

const result = array.reduce((accumulator, currentValue, currentIndex) => accumulator + currentValue + currentIndex);
