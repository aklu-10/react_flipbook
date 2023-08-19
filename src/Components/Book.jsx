import HTMLFlipBook from "react-pageflip";
import React, { useEffect, useRef, useState } from 'react';

const PageCover = React.forwardRef((props, ref) => {
    return (
      <div className="bg-gray-500 border" ref={ref} data-density="hard">
        <div className="mt-[50%] text-center text-[2rem]">
          <h2>{props.children}</h2>
        </div>
      </div>
    );
  });
  
  const Page = React.forwardRef((props, ref) => {
    return (
      <div className="bg-red-500" ref={ref}>
        <div className="page-content">
          <h2 className="page-header">Page header - {props.number}</h2>
          <div className="page-image"></div>
          <div className="page-text">{props.children}</div>
          <div className="page-footer">{props.number + 1}</div>
        </div>
      </div>
    );
  });
  
  const DemoBook = () =>
  {
    const [state, setState] = useState({
        page: 0,
        totalPage: 0,
    });

    const flipbook = useRef(null);

    const nextButtonClick = () => {
        this.flipBook.getPageFlip().flipNext();
      };

    const prevButtonClick = () => {
        // this.flipBook.getPageFlip().flipPrev();
      };

    const onPage = (e) => {
        setState({
          page: e.data,
        });
      };


    return (
        <div className="p-2 bg-blue-200">
          <HTMLFlipBook
            width={550}
            height={733}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            onFlip={onPage}
            // onChangeOrientation={this.onChangeOrientation}
            // onChangeState={this.onChangeState}
            // className="demo-book"
            ref={flipbook}
          >

            <PageCover>BOOK TITLE</PageCover>
            <Page number={1}>Lorem ipsum...1</Page>
            <Page number={2}>Lorem ipsum...2</Page>
            <Page number={3}>Lorem ipsum...3</Page>
            <Page number={4}>Lorem ipsum...4</Page>
            <PageCover>THE END</PageCover>

          </HTMLFlipBook>
  
          <div className="container">
            <div>

              <button type="button" onClick={prevButtonClick}>
                Previous page
              </button>

              [<span>{state.page}</span> of
               <span>{state.totalPage}</span>]

              <button type="button" onClick={nextButtonClick}>
                Next page
              </button>

            </div>
            <div>

              {/* State: <i>{this.state.state}</i>, orientation: <i>{this.state.orientation}</i> */}

            </div>
          </div>
        </div>
    )
  }

  export default DemoBook;