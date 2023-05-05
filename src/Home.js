import React from 'react'

export default function Home(props) {
    return(
        <>
            <div className={`${props.mode}`}>
               <h1 className={`${props.mode}`}>Welcome To MultiUtils</h1>
               <h4 className="h4">A perfect solution for your needs</h4>
               <h1 className="h1">About Multi Utils</h1>
               <p className="text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam quos officiis dolores iusto ipsum nam laborum earum accusamus unde magnam perferendis a incidunt ipsa neque praesentium nisi non, nobis et soluta qui veritatis fugiat.</p>
            </div>
        </>
    )
}