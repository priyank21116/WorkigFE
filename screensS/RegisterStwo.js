import React from 'react';
import { Button, TextInput,  View } from 'react-native';
import { Formik } from 'formik';
import tw from 'tailwind-react-native-classnames';

const arr={
      setpassword: String,
      confirmPass: String,
      ad1: String,
      ad2: String,
      landmark: String,
      city: String,
      pin: Number,
      state: String,
      adharNo: Number,
      adharPhoto: String

}

// password: yup.string().required('Password is required'),


const RegisterStwo = props => (
      <Formik
            initialValues={{ email: '' }}
            onSubmit={values => console.log(values)}
      >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                  <View>
                        <TextInput
                              style={tw`w-9/12 h-12 p-3 mt-40 bg-blue-500 mx-auto  `}

                              onChangeText={handleChange('email')}
                              onBlur={handleBlur('email')}
                              value={values.email}
                        />
                        {/* <Input placeholder="Mobile Number"
                              label="Phone"
                              labelStyle={tw`p-2 bg-green-600 text-blue-800`}

                              keyboardType="number-pad" /> */}
                        <Button onPress={() => navigation.navigate('LoginS')} title="Submit" />
                  </View>
            )}
      </Formik>
);

export default RegisterStwo