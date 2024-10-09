const a=document.querySelector('button')
const b=document.querySelector('body')

    
    document.addEventListener('click', (event) => {
        const x = event.clientX;
        const y = event.clientY;
        
        let radius=Math.floor(Math.random()*200)
        const circle = document.createElement('div');
        circle.style.width = `${radius}px`;
        circle.style.height = `${radius}px`;
        circle.style.borderRadius = '50%';
        // circle.style.backgroundColor = 'red';
        circle.style.border = '2px solid green';
        circle.style.position = 'absolute';
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
    
        document.body.append(circle);
    });
    