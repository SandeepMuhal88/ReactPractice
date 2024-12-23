import React from 'react'

const Events = () => {
    const Handler = () => {
        console.log("Copied")
    }
return (
    <div>
        <h1>Events In React</h1>
        <button onClick={() => alert("Button Clicked")} className='bg-slate-400 p-4 b-rounded hover:bg-slate-500 gap-2'>Click</button>
        <button onClick={() => console.log("Button Clicked")} className='bg-slate-400 p-4 b-rounded hover:bg-slate-500 gap-2'>Submit</button>
        <hr />
        <h1>Oncopy</h1>
        <p onCopyCapture={()=> Handler()}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam hic impedit quasi doloribus laborum explicabo odio at culpa eveniet accusantium! Quidem, quas ipsum. Omnis dicta voluptates quasi? Illo, quia fugale. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, debitis iure obcaecati dicta optio dolorum deserunt quo quaerat nesciunt, blanditiis voluptatem tenetur placeat asperiores sapiente cumque cum, ipsa pariatur nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur omnis nemo accusantium. Deleniti impedit eum ipsa quos qui inventore saepe eius in aspernatur ullam quam commodi, sed voluptates rerum voluptatum.</p>
        <hr />
        <h1>onMouseMove</h1>
        <p onMouseMove={() => console.log("Mouse Move")}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quos quia doloremque, commodi cumque eum explicabo, exercitationem recusandae dolorem impedit dolore ipsa earum minus? Facere, quam nulla sunt adipisci corporis voluptates. Dolores exercitationem omnis est vitae aut, amet sequi qui ducimus vel delectus! Dolor eos amet aliquam repellat iusto officiis optio laborum fugiat hic eveniet accusantium quae ratione eligendi exercitationem dignissimos cumque soluta dolore ipsum veritatis magnam, id ad minima? Necessitatibus reiciendis laudantium facilis quo et provident vero fugit suscipit quaerat ducimus! Deleniti maiores minus dolorum tempore ad unde eveniet culpa recusandae sunt, in porro sint. Numquam officiis nihil ex nostrum itaque, quos quasi error sunt beatae dolorem harum a aliquid hic ad, animi quo fugiat sapiente consequatur, totam natus excepturi! Repellat expedita a ad cum ducimus repellendus natus accusamus optio dolor, dolorum voluptatum harum debitis ipsa laboriosam culpa quia tempora repudiandae tenetur qui magni, eaque impedit quisquam, iusto nihil. Vel quos rerum earum sunt harum dicta accusantium in! Natus cumque soluta culpa modi odit porro pariatur autem iure dolore sequi error, vero architecto repellendus magni repudiandae adipisci expedita enim corporis minus provident nesciunt? Suscipit molestiae harum nostrum veniam, cumque sit dolorem voluptatum a inventore neque blanditiis molestias iusto consectetur.</p>
    </div>
)
}

export default Events;