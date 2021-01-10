import React from 'react';
import '../css/widgets.css';

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        title="Facebook widget"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffibertech.computers%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId"
        width="340"
        height="1500"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default Widgets;
