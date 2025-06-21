import Task from './Task';
import TaskList from './TaskList';
import * as TaskStories from './Task.stories';

import {Provider} from 'react-redux';
import {configureStore, createSlice} from '@reduxjs/toolkit';

// Mocked state for the TaskList component
export const MockedState = {
    tasks: [
        {
            ...TaskStories.Default.args.task, id: '1', title: 'Task 1', state: 'TASK_INBOX'
        },
        {
            ...TaskStories.Default.args.task, id: '2', title: 'Task 2', state: 'TASK_INBOX'
        },
        {
            ...TaskStories.Default.args.task, id: '3', title: 'Task 3', state: 'TASK_INBOX'
        },
        {
            ...TaskStories.Default.args.task, id: '4', title: 'Task 4', state: 'TASK_INBOX'
        },
        {
            ...TaskStories.Default.args.task, id: '5', title: 'Task 5', state: 'TASK_INBOX'
        },
    ],
    status: 'idle',
    error: null,
}

// Mocked story for the TaskList component
const MockedStore = ({taskState, children}) => (
    <Provider store={configureStore({
        reducer: {
            task: createSlice({
                name: 'task',
                initialState: MockedState,
                reducers: {
                    updateTaskState: (state, action) => {
                        const {id, newState} = action.payload;
                        const task = state.tasks.findIndex((task) => task.id === id);

                        if (task >= 0) {
                            state.tasks[task.state] = newState;
                        }
                    }
                },
            }).reducer,
        },
    })}>
        {children}
    </Provider>
)

export default {
    component: TaskList,
    title: 'TaskList',
    tags: ['autodocs'],
}

export const Default = {
    decorators: [
        (story) => <MockedStore taskState={MockedState}>{story()}</MockedStore>
    ]
}

export const Loading = {
    decorators: [
        (story) => <MockedStore taskState={{...MockedState, status: 'loading'}}>{story()}</MockedStore>
    ]
}

export const Empty = {
    decorators: [
        (story) => <MockedStore taskState={{...MockedState, tasks: []}}>{story()}</MockedStore>
    ]
}

export const Pinned = {
    decorators: [
        (story) => {
            const pinnedTasks = [
                ...MockedState.tasks.slice(0, 4),
                {id: '5', title: 'Task 5 (Pinned)', state: 'TASK_PINNED'},
            ]
            return <MockedStore taskState={{...MockedState, tasks: pinnedTasks}}>{story()}</MockedStore>
        }
    ]
}

