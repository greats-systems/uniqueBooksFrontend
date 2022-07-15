// third-party
import { Chance } from 'chance';
import jwtDecode from 'jwt-decode';

// reducer - state management
import { LOGIN, LOGOUT } from 'store/actions';

// project imports
import axios from 'utils/axios';

import { createContext, useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';

const chance = new Chance();

// constant
const initialState = {
    isLoggedIn: false,
    isInitialized: false,
    user: null
};

const verifyToken = (serviceToken) => {
    if (!serviceToken) {
        return false;
    }
    const decoded = jwtDecode(serviceToken);
    /**
     * Property 'exp' does not exist on type '<T = unknown>(token, options?: JwtDecodeOptions | undefined) => T'.
     */
    return decoded.exp > Date.now() / 1000;
};

const setSession = (serviceToken) => {
    if (serviceToken) {
        localStorage.setItem('serviceToken', serviceToken);
        axios.defaults.headers.common.Authorization = `Bearer ${serviceToken}`;
    } else {
        localStorage.removeItem('serviceToken');
        delete axios.defaults.headers.common.Authorization;
    }
};




// import { SNACKBAR_OPEN, LOGIN, ACCOUNT_INITIALIZE } from 'store/actions';

const JWTContext = createContext()
	
export default JWTContext;


export const JWTProvider = ({children}) => { 


    const [contextTest, setContextTest] = useState('This Works')
	const [isLoading, setIsLoading] = useState(false)
	const [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : undefined) 
	const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
	const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('loggedStatus') ? localStorage.getItem('loggedStatus') : false )
	const [pageLoading, setPageLoading] = useState(true)
	const [currentBook, setCurrentBook] = useState('')
	// const [url, setUrl] = useState('https://uniquebackend.malingreatssmartsystems.co.zw')
	const [url, setUrl] = useState('http://localhost:8000')


	const [interiorColor, setInteriorColor] = useState([])
	const [paperType, setPaperType] = useState([])
	const [bindingOption, setBindingOption] = useState([])
	const [coverFinish, setCoverFinish] = useState([])
	const [page, setPage] = useState([])
	const [bookSize, setBookSize] = useState([])


	const navigate = useNavigate() 
    const dispatch = useDispatch()

    // useEffect(() => {
        //         const init = async () => {
        //             try {
        //                 const serviceToken = window.localStorage.getItem('serviceToken');
        //                 if (serviceToken && verifyToken(serviceToken)) {
        //                     setSession(serviceToken);
        //                     const response = await axios.get('/api/account/me');
        //                     const { user } = response.data;
        //                     dispatch({
        //                         type: LOGIN,
        //                         payload: {
        //                             isLoggedIn: true,
        //                             user
        //                         }
        //                     });
        //                 } else {
        //                     dispatch({
        //                         type: LOGOUT
        //                     });
        //                 }
        //             } catch (err) {
        //                 console.error(err);
        //                 dispatch({
        //                     type: LOGOUT
        //                 });
        //             }
        //         };
        
        //         init();
        //     }, []);
        


    const login = async (email, password) => {
            const response = await fetch(`${url}/author/token/`, {
                    method: 'POST',
			headers: {
				'Content-Type':'application/json'
			},
			body: JSON.stringify({'username':email,  'password': password})

                });
                console.log(response)
                const data = await response.json()
				if (response.status === 200) {
					setAuthTokens(data)
					setUser(jwt_decode(data.access))
					setIsLoggedIn(true)
					localStorage.setItem('authTokens', JSON.stringify(data))
					localStorage.setItem('loggedStatus', true)
					console.log('Real User', user)
					console.log('Decoded Data', jwt_decode(data.access))
					dispatch({
						type: LOGIN,
						payload: {
							isLoggedIn: true,
							user
						}
					});
				}
            };



const getInteriorColor = async() => {
	var requestOptions = {
		method: 'GET',
		redirect: 'follow'
	  };
	  
	  const res = await fetch(`${url}/service_fees/interior_colors_list`, requestOptions)
	  const data = await res.json()
	  setInteriorColor(data)
}

const getPaperType = async() => {
	var requestOptions = {
		method: 'GET',
		redirect: 'follow'
	  };
	  
	  const res = await fetch(`${url}/service_fees/paper_type_list`, requestOptions)
	  const data = await res.json()
	  setPaperType(data)
}

const getBindingOption = async() => {
	var requestOptions = {
		method: 'GET',
		redirect: 'follow'
	  };
	  
	  const res = await fetch(`${url}/service_fees/binding_options_list`, requestOptions)
	  const data = await res.json()
	  setBindingOption(data)
}

const getCoverFinish = async() => {
	var requestOptions = {
		method: 'GET',
		redirect: 'follow'
	  };
	  
	  const res = await fetch(`${url}/service_fees/cover_finish_list`, requestOptions)
	  const data = await res.json()
	  setCoverFinish(data)
}

const getPage = async() => {
	var requestOptions = {
		method: 'GET',
		redirect: 'follow'
	  };
	  
	  const res = await fetch(`${url}/service_fees/pages_list`, requestOptions)
	  const data = await res.json()
	  setPage(data)
}

const getBookSize = async() => {
	var requestOptions = {
		method: 'GET',
		redirect: 'follow'
	  };
	  
	  const res = await fetch(`${url}/service_fees/book_size_list`, requestOptions)
	  const data = await res.json()
	  setBookSize(data)
}


 const register = async(email, username, password1, password2) => {
	var formdata = new FormData();
	formdata.append("username", username);
	formdata.append("email", email);
	formdata.append("password", password1);
	formdata.append("password2", password2);
	
	var requestOptions = {
	  method: 'POST',
	  body: formdata,
	  redirect: 'follow'
	};
	
	const res = await fetch(`${url}/users/register/`, requestOptions)
	const data = await res.json()

	if (res.status === 201) {
		login(username, password1)
	}
 }


useEffect(()=> {
	getInteriorColor()
	getBindingOption()
	getBookSize()
	getCoverFinish()
	getPage()
	getPaperType()
}, [interiorColor, bindingOption, bookSize, coverFinish, page, paperType])

	

	let contextData = {
		url:url,
		user:user,
		authTokens:authTokens,
		isLoggedIn:isLoggedIn,
        login:login,
		register, register,
		isLoading:isLoading,
        contextTest:contextTest,
		currentBook:currentBook,
		setCurrentBook:setCurrentBook,
		interiorColor:interiorColor, 
		bindingOption:bindingOption, 
		bookSize:bookSize, 
		coverFinish:coverFinish, 
		page:page, 
		paperType:paperType
	}




	// useEffect(() => {

	// 	console.log("LOGIN STATUS", isLoggedIn)

	// 	const fourMinutes = 1000 * 60 * 4
	// 	const interval = setInterval(() => {
	// 		if(authTokens) {
	// 			updateToken()
	// 		}
	// 	}, fourMinutes)
	// 	return () => clearInterval(interval)

	// }, [authTokens, pageLoading])

	return(
		<JWTContext.Provider value={contextData}>
			{children}
		</JWTContext.Provider>
	)
}