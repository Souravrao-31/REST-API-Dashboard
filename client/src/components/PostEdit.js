import React from 'react'
import { Edit, SimpleForm, TextInput,DateInput  } from 'react-admin'

 const PostEdit = (props) => {
    return (
        <Edit title="Edit a Post" {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput multiline source="body" />
                <DateInput label="Publish" source="publishedAt" />            
            </SimpleForm>
        </Edit>
    )
}

export default PostEdit