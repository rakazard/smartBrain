import React from 'react'

const Register = ({onRouteChange}) => {
  return (
    <div className="flex items-center h-100" >
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
            <div className="measure flex-column">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Register</legend>
                <div className="mt3 flex-column">
                    <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                    <input className="pa2 input-reset br2 ba b--dark-gray bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
                </div>
                <div className="mt3 flex-column">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input className="pa2 input-reset br2 ba b--dark-gray bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                </div>
                <div className="mv3 flex-column">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset br2 ba b--dark-gray bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                </div>
                </fieldset>
                <div className="">
                    <input className="b ph3 pv2 input-reset br2 ba b--dark-gray bg-transparent grow pointer f6 dib" type="submit" value="Register" onClick={()=> onRouteChange("home")}/>
                </div>
            </div>
            </main>
        </article>
    </div>
  )
}

export default Register