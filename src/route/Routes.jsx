import React, { Component } from 'react'
import HomePage from '../pages/HomePage'
import BoardPage from '../pages/BoardPage'
import ProfilePage from '../pages/ProfilePage'
import PropsPage from '../pages/PropsPage'
import ThreePage from '../pages/ThreePage'
import CounterPage from '../pages/CounterPage'

//React Routes, Route 사용시 배열로 관리하기
const routes = [
    {
        path: '/',
        element: <HomePage />,
        title: 'Home',
    },
    {
        path: '/board',
        element: <BoardPage />,
        title: 'Board',
    },
    {
        path: '/profile',
        element: <ProfilePage />,
        title: 'Profile',
    },
    {
        path: '/props',
        element: <PropsPage />,
        title: '프롭스',
    },
    {
        path: '/three',
        element: <ThreePage />,
        title: '조건부랜더링',
    },
    {
        path: '/useState',
        element: <CounterPage />,
        title: '숫자증감',
    },
]

export default routes
