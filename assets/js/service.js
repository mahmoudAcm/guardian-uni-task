
const serviceCard = ({ title, bg, rest }) => `
<div class="card ${rest? 'shadow': 'shadow-sm'}">
    <div class="card-body">
        <div>
            <div class="service-circle ${bg}"></div>
        </div>
        <div class="main-content-right">
            <h5 class='service-first-title'>${title}</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
</div>
`;

const serviceItems = [
{
    title: 'Excellent protection',
    bg: 'bg-third',
    rest: true
},
{
    title: 'High savings potential',
    bg: 'bg-second'
},
{
    title: 'Maximum time savings',
    bg: 'bg-first'
}
];

const serviceCardContainer = $(".service-first .main-content");
serviceCardContainer.append(serviceItems.map(item => serviceCard(item)).join(""));