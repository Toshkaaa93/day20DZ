import * as React from "react";
import { useDispatch } from "react-redux";
import { signInQuery } from "../../redux/actionCreators/personAC";
import { useLocation, useNavigate } from "react-router-dom";


export default function SignIn() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
  
    let from = location.state?.from?.pathname || "/";
    
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      dispatch(
        signInQuery({
          email: data.get("email"),
          password: data.get("password"),
          cb: () => {
            navigate(from, { replace: true });
          },
        })
      );
    };

    return (
        <div className="d-flex justify-content-center">
        <form>
          <span className="text center"><h3>Вход в личный кабинет</h3></span>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="name@example.com" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
          <input type="password" className="form-control" placeholder="password" id="exampleInputPassword1"/>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
        <button type="submit" className="btn btn-primary center" onSubmit={handleSubmit}>Войти</button>
        </div>
      </form>
      </div>
    )
  }