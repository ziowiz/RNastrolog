import React, { createContext, useReducer } from "react";

// Создаем контекст
export const PostContext = createContext();

// Начальное состояние
const initialState = {
	posts: [],
};

// Редюсер для управления состоянием
// action = { type: "ADD_POST" | "DELETE_POST", payload: { id, title, body } }
const postReducer = (state, action) => {
	switch (action.type) {
		case "ADD_POST":
			return { ...state, posts: [...state.posts, action.payload] };
		case "DELETE_POST":
			return {
				...state,
				posts: state.posts.filter((post) => post.id !== action.payload),
			};
		default:
			return state;
	}
};

// Провайдер для предоставления состояния и функций управления состоянием компонентам
export const PostProvider = ({ children }) => {
	const [state, dispatch] = useReducer(postReducer, initialState);

	// Функция для добавления поста
	const addPost = (post) => {
		dispatch({ type: "ADD_POST", payload: post });
	};

	// Функция для удаления поста
	const deletePost = (id) => {
		dispatch({ type: "DELETE_POST", payload: id });
	};

	return (
		<PostContext.Provider value={{ posts: state.posts, addPost, deletePost }}>
			{children}
		</PostContext.Provider>
	);
};
