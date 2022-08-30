import React, { useState } from 'react'

import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2022')

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear)
	}

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	})

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					onFilterChange={filterChangeHandler}
					selected={filteredYear}
				/>
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	)
}

export default Expenses
