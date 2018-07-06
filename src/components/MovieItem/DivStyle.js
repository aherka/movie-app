import styled from 'styled-components';

const Div = styled.div`
    background-image:url(${props => props.img});

    
    background-color: white;
    
    cursor: pointer;
    height: 300px;
    width: 200px;

    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    background-size: 200px 300px;
    background-repeat: no-repeat;
    
    margin:10px;
    padding:10;
    display: inline-block;
    overflow:hidden;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    position: relative;


&:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

&.detailed {
    width:500px;
}

& .info {
    position: absolute;
    float: left;
    text-align: center;
    left: 0px;
}

&:hover > .info {
    top: 62%;
}

&.detailed:hover .info{
    top: 100%;
}


& .detail {
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);  
    visibility: hidden;
    width: 300px;
    height: 300px;
    position: absolute;
    top: 0px;

}

&.detailed .detail {
    visibility: visible;
    width: 300px;
    height: 300px;
    float: right;
    top: 0px;
    left: 200px;
}
&.detailed .detail p{
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    text-align: left;
    width: 270px;
}

& p.title {
    color:#731eb1;
    font-size: 1.1em;
    font-weight: 700;
    padding: 10px;
    margin: 10px 5px;
}

& p.cast {
    
    padding: 10px;
    padding-top: 0px;
    
    margin: 10px 5px;
    margin-top: 0px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
& p.director {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 10px;
    margin: 10px 5px;
    margin-bottom: 0px;
}

& p.desc {
    font-size: 0.8em;
    height: 5em;
    padding: 10px;
    margin: 10px 5px;
}

& a {
    transition: all cubic-bezier(0.645, 0.045, 0.355, 1);
    display: block;
    text-align: right;
    font-size: 0.8em;
    font-weight: 700;
    margin: 10px;
    padding: 5px;
    height: 1em;
    width: 250px;
}

& a:link {
    text-decoration: none;
    color: #731eb1;
}

& a:visited {
    text-decoration: none;
    color: #731eb1;
}

& a:hover {
    text-decoration: underline;
    color: #541183;
}

& a:active {
    text-decoration: underline;
    color: #731eb1;
}
`

export { Div };
