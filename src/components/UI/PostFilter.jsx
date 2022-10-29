import React from 'react';
import MySelect from './select/MySelect';
import MyInput from './inout/MyInput';

const PostFilter = ({filter , setFilter}) => {
    return (
        <div>
        <MyInput
        placeholder="Searsh"
        value={filter.query}
        onChange={e => setFilter({...filter , query:e.target.value})}
        />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter , sort: selectedSort})}
        defaultValue={"Sort"}
        option={[
          {value:'title', name : 'By name'},
          {value: 'body', name : 'By discritption'}

        ]}
      />
      </div>
    );
};

export default PostFilter;