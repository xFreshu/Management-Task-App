'use client'
import React, { useState } from 'react'
import classes from './SlugTablePage.module.scss'

const DUMMY_DATA = [
  // {
  //   id: 1,
  //   title: 'Task 1',
  //   author: 'John Doe',
  //   dataDue: '2021-01-01',
  //   status: 'In Progress',
  //   priority: 'High',
  //   env: 'Production',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  // },
]

export default function SlugTablePage() {
  const [selectedTask, setSelectedTask] = useState('')
  const selectTask = (id: number) => {
    const task = DUMMY_DATA.find((task) => task.id === id)
    if (task) {
      // @ts-ignore
      setSelectedTask(task)
    } else {
      setSelectedTask('')
    }
  }
  console.log(selectedTask)
  const consoleIt = () => {}
  return (
    <>
      {DUMMY_DATA.length !== 0 ? (
        <div className={classes.container}>
          <div>
            <ul className={classes.taskList}>
              {DUMMY_DATA.map((task) => (
                <li key={task.id} onClick={() => selectTask(task.id)}>
                  <div>
                    <span>{task.title}</span>
                    <span>{task.author}</span>
                  </div>
                  <div>
                    <span className={classes.right}>{task.status}</span>
                    <span className={classes.right}>{task.priority}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {selectedTask && (
            <div className={classes.contextTask}>
              <div className={classes.contextHeader}>
                <div>
                  <span>{selectedTask.title}</span>
                  <span>{selectedTask.author}</span>
                  <span>{selectedTask.dataDue}</span>
                </div>
                <div>
                  <span className={classes.right}>{selectedTask.priority}</span>
                  <span className={classes.right}>{selectedTask.env}</span>
                  <span className={classes.right}>{selectedTask.status}</span>
                </div>
              </div>
              <span>{selectedTask.description}</span>
            </div>
          )}
        </div>
      ) : (
        <h1>nope</h1>
      )}
    </>
  )
}
