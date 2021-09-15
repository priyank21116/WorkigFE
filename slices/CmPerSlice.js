import { createSlice } from "@reduxjs/toolkit";

const CPerinitialState = {
      name: "",
      phone: 0,
      emergencyNo: 0,
      email: "",
      address: {
            ad1: "",
            ad2: "",
            landmark: "",
            pin: 0,
            city: "",
            Statee: "",
      },
      password: "",
      helpDomain: "",
      SpecifyHelp: "",
      NewreviewsC: {
            givenbyid: "",
            givenbyname: "",
            rating: 0,
            comment: "",
      }
}

export const Cmlice = createSlice({
      name: 'Cm',
      initialState: CPerinitialState,
      reducers: {
            CwritePhone: (state, actions) => {
                  console.log("ACTIONSHBDNM", actions)
                  state.phone = actions.payload
            },
            SMaddRegisteroneDetails: (state, actions) => { 
                  const {Name,email,emergencyNo,password,ad1,ad2,landmark,city,pin,sstate} = actions.payload

                  state.name=Name
                  state.email = email
                  state.emergencyNo = emergencyNo
                  state.password= password
                  state.address.ad1=ad1
                  state.address.ad2 = ad2
                  state.address.landmark= landmark
                  state.address.city= city
                  state.address.pin=pin
                  state.address.Statee= sstate

            },

            // HelprequireNitsDeatils:(state,actions)=>{
            //        const {}= actions.payload
            //        state.helpDomain= 
            //        state.SpecifyHelp =
            // },
    
            CustomerReview: (state, actions) => {
                  const  {givenbyid,givenbyname,rating,comment} = actions.payload
                   state.NewreviewsC.givenbyid= givenbyid
                   state.NewreviewsC.givenbyname=givenbyname
                   state.NewreviewsC.rating =rating
                   state.NewreviewsC.comment =comment
             }


      }
})


export const { CwritePhone} = Cmlice.actions

export default Cmlice.reducer