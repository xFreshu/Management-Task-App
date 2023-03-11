'use client'
import React, { useState } from 'react'
import classes from './SlugTablePage.module.scss'
import { ITask } from '@/app/table/[table]/ITask'

const DUMMY_DATA: ITask[] = [
  {
    id: 1,
    title: 'Task 1',
    author: 'John Doe',
    dataDue: '2021-01-01',
    status: 'In Progress',
    priority: 'High',
    env: 'Production',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]

export default function SlugTablePage() {
  const [selectedTask, setSelectedTask] = useState('')
  const selectTask = (id: number) => {
    const task = DUMMY_DATA.find((task) => task.id === id)
    if (task) {
      setSelectedTask(task)
    } else {
      setSelectedTask('')
    }
  }
  const { title, author, dataDue, description, env, status, priority } =
    selectedTask

  return (
    <>
      {DUMMY_DATA.length !== 0 ? (
        <div className={classes.container}>
          <div>
            <ul className={classes.taskList}>
              {DUMMY_DATA.map(({ id, title, author, status, priority }) => (
                <li key={id} onClick={() => selectTask(id)}>
                  <div>
                    <span>{title}</span>
                    <span>{author}</span>
                  </div>
                  <div>
                    <span className={classes.right}>{status}</span>
                    <span className={classes.right}>{priority}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {selectedTask && (
            <div className={classes.contextTask}>
              <div className={classes.contextHeader}>
                <div>
                  <span>{title}</span>
                  <span>{author}</span>
                  <span>{dataDue}</span>
                </div>
                <div>
                  <span className={classes.right}>{priority}</span>
                  <span className={classes.right}>{env}</span>
                  <span className={classes.right}>{status}</span>
                </div>
              </div>
              <span>{description}</span>
            </div>
          )}
        </div>
      ) : (
        <h1>nope</h1>
      )}
    </>
  )
}
