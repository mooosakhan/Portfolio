document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');

  themeToggle.addEventListener('change', () => {
    const pageElements = [
      document.getElementById('page'),
      document.getElementById('page1'),
      document.getElementById('page2'),
      document.getElementById('page3')
    ];
    const skeletonElements = [
      document.getElementById('Skeleton'),
      document.getElementById('Skeleton2')
    ];
    const moosaElement = document.getElementById('Moosa');
    const themeCheckboxElements = document.getElementsByClassName('theme-checkbox');
    const batmanButton = document.getElementById('batman');
    const batmanSpan = document.querySelector('#batman span');

    if (themeToggle.checked) {
      pageElements.forEach(element => {
        element.style.backgroundColor = 'black';
        element.style.color = '#f1f1f1';
      });
      skeletonElements.forEach(element => {
        element.style.webkitTextStroke = '1.2px #f1f1f1';
      });
      moosaElement.style.color = '#f1f1f1';
      for (let i = 0; i < themeCheckboxElements.length; i++) {
        themeCheckboxElements[i].style.border = '3px solid #f1f1f1';
      }
      batmanButton.style.backgroundColor = 'transparent';
      batmanButton.style.color = '#f1f1f1';
      batmanSpan.style.color = 'white';
      const bgElements = document.getElementsByClassName('BG');

      for (let i = 0; i < bgElements.length; i++) {
        bgElements[i].style.backgroundColor = 'white';
      }
      const svgElement = document.querySelector('.svgContainer svg');
      svgElement.style.fill = 'black';
      // const svgElement2 = document.querySelector('#b2 svg');
      // svgElement2.style.fill = 'black';
      const svgElement3 = document.querySelector('#b3 svg');
      svgElement3.style.fill = 'black';
      // const svgElement4 = document.querySelector('#b4 svg');
      // svgElement4.style.fill = 'black';
      // Get all elements with the class '🤚'
      const elements = document.getElementsByClassName('🤚');

      // Loop through each element and set the --skin-color property
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.setProperty('--skin-color', 'silver');
      }
    } else {
      pageElements.forEach(element => {
        element.style.backgroundColor = '#f1f1f1';
        element.style.color = 'black';
      });
      skeletonElements.forEach(element => {
        element.style.webkitTextStroke = '1.2px black';
      });
      moosaElement.style.color = 'black';
      for (let i = 0; i < themeCheckboxElements.length; i++) {
        themeCheckboxElements[i].style.border = '3px solid black';
      }
      batmanButton.style.backgroundColor = 'transparent';
      batmanButton.style.color = 'black';
      batmanSpan.style.color = 'grey';
      const bgElements = document.getElementsByClassName('BG');

      for (let i = 0; i < bgElements.length; i++) {
        bgElements[i].style.backgroundColor = 'black';
      }
      const svgElement = document.querySelector('.svgContainer svg');
      svgElement.style.fill = 'white';
      const svgElement2 = document.querySelector('#b2 svg');
      svgElement2.style.fill = 'white';
      const svgElement3 = document.querySelector('#b3 svg');
      svgElement3.style.fill = 'white';
      const svgElement4 = document.querySelector('#b4 svg');
      svgElement4.style.fill = 'white';
      
    }
  });
});



function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./assests/male0001.png
     ./assests/male0002.png
     ./assests/male0003.png
     ./assests/male0004.png
     ./assests/male0005.png
     ./assests/male0006.png
     ./assests/male0007.png
     ./assests/male0008.png
     ./assests/male0009.png
     ./assests/male0010.png
     ./assests/male0011.png
     ./assests/male0012.png
     ./assests/male0013.png
     ./assests/male0014.png
     ./assests/male0015.png
     ./assests/male0016.png
     ./assests/male0017.png
     ./assests/male0018.png
     ./assests/male0019.png
     ./assests/male0020.png
     ./assests/male0021.png
     ./assests/male0022.png
     ./assests/male0023.png
     ./assests/male0024.png
     ./assests/male0025.png
     ./assests/male0026.png
     ./assests/male0027.png
     ./assests/male0028.png
     ./assests/male0029.png
     ./assests/male0030.png
     ./assests/male0031.png
     ./assests/male0032.png
     ./assests/male0033.png
     ./assests/male0034.png
     ./assests/male0035.png
     ./assests/male0036.png
     ./assests/male0037.png
     ./assests/male0038.png
     ./assests/male0039.png
     ./assests/male0040.png
     ./assests/male0041.png
     ./assests/male0042.png
     ./assests/male0043.png
     ./assests/male0044.png
     ./assests/male0045.png
     ./assests/male0046.png
     ./assests/male0047.png
     ./assests/male0048.png
     ./assests/male0049.png
     ./assests/male0050.png
     ./assests/male0051.png
     ./assests/male0052.png
     ./assests/male0053.png
     ./assests/male0054.png
     ./assests/male0055.png
     ./assests/male0056.png
     ./assests/male0057.png
     ./assests/male0058.png
     ./assests/male0059.png
     ./assests/male0060.png
     ./assests/male0061.png
     ./assests/male0062.png
     ./assests/male0063.png
     ./assests/male0064.png
     ./assests/male0065.png
     ./assests/male0066.png
     ./assests/male0067.png
     ./assests/male0068.png
     ./assests/male0069.png
     ./assests/male0070.png
     ./assests/male0071.png
     ./assests/male0072.png
     ./assests/male0073.png
     ./assests/male0074.png
     ./assests/male0075.png
     ./assests/male0076.png
     ./assests/male0077.png
     ./assests/male0078.png
     ./assests/male0079.png
     ./assests/male0080.png
     ./assests/male0081.png
     ./assests/male0082.png
     ./assests/male0083.png
     ./assests/male0084.png
     ./assests/male0085.png
     ./assests/male0086.png
     ./assests/male0087.png
     ./assests/male0088.png
     ./assests/male0089.png
     ./assests/male0090.png
     ./assests/male0091.png
     ./assests/male0092.png
     ./assests/male0093.png
     ./assests/male0094.png
     ./assests/male0095.png
     ./assests/male0096.png
     ./assests/male0097.png
     ./assests/male0098.png
     ./assests/male0099.png
     ./assests/male0100.png
     ./assests/male0101.png
     ./assests/male0102.png
     ./assests/male0103.png
     ./assests/male0104.png
     ./assests/male0105.png
     ./assests/male0106.png
     ./assests/male0107.png
     ./assests/male0108.png
     ./assests/male0109.png
     ./assests/male0110.png
     ./assests/male0111.png
     ./assests/male0112.png
     ./assests/male0113.png
     ./assests/male0114.png
     ./assests/male0115.png
     ./assests/male0116.png
     ./assests/male0117.png
     ./assests/male0118.png
     ./assests/male0119.png
     ./assests/male0120.png
     ./assests/male0121.png
     ./assests/male0122.png
     ./assests/male0123.png
     ./assests/male0124.png
     ./assests/male0125.png
     ./assests/male0126.png
     ./assests/male0127.png
     ./assests/male0128.png
     ./assests/male0129.png
     ./assests/male0130.png
     ./assests/male0131.png
     ./assests/male0132.png
     ./assests/male0133.png
     ./assests/male0134.png
     ./assests/male0135.png
     ./assests/male0136.png
     ./assests/male0137.png
     ./assests/male0138.png
     ./assests/male0139.png
     ./assests/male0140.png
     ./assests/male0141.png
     ./assests/male0142.png
     ./assests/male0143.png
     ./assests/male0144.png
     ./assests/male0145.png
     ./assests/male0146.png
     ./assests/male0147.png
     ./assests/male0148.png
     ./assests/male0149.png
     ./assests/male0150.png
     ./assests/male0151.png
     ./assests/male0152.png
     ./assests/male0153.png
     ./assests/male0154.png
     ./assests/male0155.png
     ./assests/male0156.png
     ./assests/male0157.png
     ./assests/male0158.png
     ./assests/male0159.png
     ./assests/male0160.png
     ./assests/male0161.png
     ./assests/male0162.png
     ./assests/male0163.png
     ./assests/male0164.png
     ./assests/male0165.png
     ./assests/male0166.png
     ./assests/male0167.png
     ./assests/male0168.png
     ./assests/male0169.png
     ./assests/male0170.png
     ./assests/male0171.png
     ./assests/male0172.png
     ./assests/male0173.png
     ./assests/male0174.png
     ./assests/male0175.png
     ./assests/male0176.png
     ./assests/male0177.png
     ./assests/male0178.png
     ./assests/male0179.png
     ./assests/male0180.png
     ./assests/male0181.png
     ./assests/male0182.png
     ./assests/male0183.png
     ./assests/male0184.png
     ./assests/male0185.png
     ./assests/male0186.png
     ./assests/male0187.png
     ./assests/male0188.png
     ./assests/male0189.png
     ./assests/male0190.png
     ./assests/male0191.png
     ./assests/male0192.png
     ./assests/male0193.png
     ./assests/male0194.png
     ./assests/male0195.png
     ./assests/male0196.png
     ./assests/male0197.png
     ./assests/male0198.png
     ./assests/male0199.png
     ./assests/male0200.png
     ./assests/male0201.png
     ./assests/male0202.png
     ./assests/male0203.png
     ./assests/male0204.png
     ./assests/male0205.png
     ./assests/male0206.png
     ./assests/male0207.png
     ./assests/male0208.png
     ./assests/male0209.png
     ./assests/male0210.png
     ./assests/male0211.png
     ./assests/male0212.png
     ./assests/male0213.png
     ./assests/male0214.png
     ./assests/male0215.png
     ./assests/male0216.png
     ./assests/male0217.png
     ./assests/male0218.png
     ./assests/male0219.png
     ./assests/male0220.png
     ./assests/male0221.png
     ./assests/male0222.png
     ./assests/male0223.png
     ./assests/male0224.png
     ./assests/male0225.png
     ./assests/male0226.png
     ./assests/male0227.png
     ./assests/male0228.png
     ./assests/male0229.png
     ./assests/male0230.png
     ./assests/male0231.png
     ./assests/male0232.png
     ./assests/male0233.png
     ./assests/male0234.png
     ./assests/male0235.png
     ./assests/male0236.png
     ./assests/male0237.png
     ./assests/male0238.png
     ./assests/male0239.png
     ./assests/male0240.png
     ./assests/male0241.png
     ./assests/male0242.png
     ./assests/male0243.png
     ./assests/male0244.png
     ./assests/male0245.png
     ./assests/male0246.png
     ./assests/male0247.png
     ./assests/male0248.png
     ./assests/male0249.png
     ./assests/male0250.png
     ./assests/male0251.png
     ./assests/male0252.png
     ./assests/male0253.png
     ./assests/male0254.png
     ./assests/male0255.png
     ./assests/male0256.png
     ./assests/male0257.png
     ./assests/male0258.png
     ./assests/male0259.png
     ./assests/male0260.png
     ./assests/male0261.png
     ./assests/male0262.png
     ./assests/male0263.png
     ./assests/male0264.png
     ./assests/male0265.png
     ./assests/male0266.png
     ./assests/male0267.png
     ./assests/male0268.png
     ./assests/male0269.png
     ./assests/male0270.png
     ./assests/male0271.png
     ./assests/male0272.png
     ./assests/male0273.png
     ./assests/male0274.png
     ./assests/male0275.png
     ./assests/male0276.png
     ./assests/male0277.png
     ./assests/male0278.png
     ./assests/male0279.png
     ./assests/male0280.png
     ./assests/male0281.png
     ./assests/male0282.png
     ./assests/male0283.png
     ./assests/male0284.png
     ./assests/male0285.png
     ./assests/male0286.png
     ./assests/male0287.png
     ./assests/male0288.png
     ./assests/male0289.png
     ./assests/male0290.png
     ./assests/male0291.png
     ./assests/male0292.png
     ./assests/male0293.png
     ./assests/male0294.png
     ./assests/male0295.png
     ./assests/male0296.png
     ./assests/male0297.png
     ./assests/male0298.png
     ./assests/male0299.png
     ./assests/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`
  }
})
gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`
  }
})
gsap.to("#page3", {
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`
  }
})






