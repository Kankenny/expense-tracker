import React, { useState } from 'react'

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false)

	const startEditing = () => {
		setIsEditing(true)
	}

	const stopEditing = () => {
		setIsEditing(false)
	}

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		}
		props.onAddExpense(expenseData)
		setIsEditing(false)
	}

	return (
		<div className="new-expense">
			{!isEditing && (
				<button onClick={startEditing}>Add New Expense</button>
			)}
			{isEditing && (
				<ExpenseForm
					onCancel={stopEditing}
					onSaveExpenseData={saveExpenseDataHandler}
				/>
			)}
		</div>
	)
}

export default NewExpense
