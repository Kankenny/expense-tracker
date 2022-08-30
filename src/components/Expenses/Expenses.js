import React, { useState } from 'react'

import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter'

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2019')

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear)
	}

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					onFilterChange={filterChangeHandler}
					selected={filteredYear}
				/>
				{props.items.map((expense) => (
					<ExpenseItem
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
			</Card>
		</div>
	)
}

export default Expenses
