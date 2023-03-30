import React from 'react';
import '../css/test.css';

function Cards() {
  const cards = [
    {
      title: 'EE 346 - Semiconductor Lab',
      professors: [
        {
          name: 'Vyas - Wilson version:',
          labs: [
            { name: 'Pre Lab 1', url: '/ee306/lab1', comment: '• Pre Lab 1 - Introduction To PSpice ' },
            { name: 'Pre Lab 2', url: '/ee306/lab1', comment: '• Pre Lab 2 - Operational Amplifiers ' },
            { name: 'Pre Lab 3', url: '/ee306/lab1', comment: '• Pre Lab 3 - Diode Characteristics ' },
            { name: 'Pre Lab 4', url: '/ee306/lab1', comment: '• Pre Lab 4 - Diode Circuits ' },
            { name: 'Pre Lab 5', url: '/ee306/lab1', comment: '• Pre Lab 5 - Breakdown Diodes ' },
            { name: 'Pre Lab 6', url: '/ee306/lab1', comment: '• Pre Lab 6 - JFET Characteristics ' },
            { name: 'Pre Lab 7', url: '/ee306/lab1', comment: '• Pre Lab 7 - Bipolar Junction Transistor ' },
            { name: 'Pre Lab 8', url: '/ee306/lab1', comment: '• Pre Lab 8 - Design of CE Biasing Circuit ' },
            { name: 'Lab 1', url: '/ee306/lab1', comment: '• Lab 1 - Introduction To PSpice ' },
            { name: 'Lab 2', url: '/ee306/lab1', comment: '• Lab 2 - Operational Amplifiers ' },
            { name: 'Lab 3', url: '/ee306/lab1', comment: '• Lab 3 - Diode Characteristics ' },
            { name: 'Lab 4', url: '/ee306/lab1', comment: '• Lab 4 - Diode Circuits ' },
            { name: 'Lab 5', url: '/ee306/lab1', comment: '• Lab 5 - Breakdown Diodes ' },
            { name: 'Lab 6', url: '/ee306/lab1', comment: '• Lab 6 - JFET Characteristics ' },
            { name: 'Lab 7', url: '/ee306/lab1', comment: '• Lab 7 - Bipolar Junction Transistor ' },
            { name: 'Lab 8', url: '/ee306/lab1', comment: '• Lab 8 - Design of CE Biasing Circuit ' },
          ],
        },
        {
          name: 'Other:',
          labs: [
            { name: 'Lab 2', url: '/ee306/lab2', comment: 'Manual' },
          ],
        },
      ],
    },
    {
      title: 'EE 347 - Digital Electronics Lab',
      professors: [
        {
          name: 'Vyas - Wilson version:',
          labs: [
            { name: 'PreLab ', url: '/ee306/lab1', comment: 'PreLab 1 - MOSFET Characteristics & Inverter' },
            { name: 'PreLab ', url: '/ee306/lab3', comment: 'PreLab 2 - CMOS VTC & Noise Margins' },
            { name: 'PreLab ', url: '/ee306/lab1', comment: 'PreLab 3 - CMOS Logic and Speed' },
            { name: 'PreLab ', url: '/ee306/lab3', comment: 'PreLab 4 - Static & Dynamic CMOS Gates' },
            { name: 'PreLab ', url: '/ee306/lab1', comment: 'PreLab 5 - Dynamic Storage Devices' },
            { name: 'PreLab ', url: '/ee306/lab3', comment: 'PreLab 6 - CMOS & TTL Power Dissipation' },
            { name: 'PreLab ', url: '/ee306/lab1', comment: 'PreLab 7 - Emitter Coupled Logic Gates' },
            { name: 'Lab ', url: '/ee306/lab1', comment: 'Lab 1 - MOSFET Characteristics & Inverter' },
            { name: 'Lab ', url: '/ee306/lab3', comment: 'Lab 2 - CMOS VTC & Noise Margins' },
            { name: 'Lab ', url: '/ee306/lab1', comment: 'Lab 3 - CMOS Logic and Speed' },
            { name: 'Lab ', url: '/ee306/lab3', comment: 'Lab 4 - Static & Dynamic CMOS Gates' },
            { name: 'Lab ', url: '/ee306/lab1', comment: 'Lab 5 - Dynamic Storage Devices' },
            { name: 'Lab ', url: '/ee306/lab3', comment: 'Lab 6 - CMOS & TTL Power Dissipation' },
            { name: 'Lab ', url: '/ee306/lab1', comment: 'Lab 7 - Emitter Coupled Logic Gates' },
          ],
        },
        {
          name: 'Other:',
          labs: [
            { name: 'Lab 2', url: '/ee306/lab2', comment: 'Manual' },
          ],
        },
      ],
    },
    {
      title: 'EE 348 - Analog Electronics Lab',
      professors: [
        {
          name: 'Professor 1',
          labs: [
            { name: 'Lab 1', url: '/ee306/lab1', comment: 'sldk' },
            { name: 'Lab 3', url: '/ee306/lab3', comment: 'sldk' },
          ],
        },
        {
          name: 'Professor 2',
          labs: [
            { name: 'Lab 2', url: '/ee306/lab2', comment: 'sldk' },
            { name: 'Lab 4', url: '/ee306/lab4', comment: 'sldk' },
          ],
        },
      ],
    },
    {
      title: 'EE 342 - Classical Controls Lab',
      professors: [
        {
          name: 'Mckell - Wilson version:',
          labs: [
            { name: 'Lab 1', url: '/ee306/lab2', comment: 'Lab 1' },
            { name: 'Lab 1', url: '/ee306/lab2', comment: 'Lab 2' },
            { name: 'Lab 1', url: '/ee306/lab2', comment: 'Lab 3' },
            { name: 'Lab 1', url: '/ee306/lab2', comment: 'Lab 4' },
            { name: 'Lab 1', url: '/ee306/lab2', comment: 'Lab 5' },
            { name: 'Lab 1', url: '/ee306/lab2', comment: 'Lab 6' },
          ],
        },
      ],
    },
    {
      title: 'EE 329 - Microcontrollers',
      professors: [
        {
          name: 'Vyas - Wilson version:',
          labs: [
            { name: 'PreLab ', url: '/ee306/lab1', comment: 'PreLab 1 - MOSFET Characteristics & Inverter' },
            { name: 'PreLab ', url: '/ee306/lab3', comment: 'PreLab 2 - CMOS VTC & Noise Margins' },
            { name: 'PreLab ', url: '/ee306/lab1', comment: 'PreLab 3 - CMOS Logic and Speed' },
            { name: 'PreLab ', url: '/ee306/lab3', comment: 'PreLab 4 - Static & Dynamic CMOS Gates' },
            { name: 'PreLab ', url: '/ee306/lab1', comment: 'PreLab 5 - Dynamic Storage Devices' },
            { name: 'PreLab ', url: '/ee306/lab3', comment: 'PreLab 6 - CMOS & TTL Power Dissipation' },
            { name: 'PreLab ', url: '/ee306/lab1', comment: 'PreLab 7 - Emitter Coupled Logic Gates' },
            { name: 'Lab ', url: '/ee306/lab1', comment: 'Lab 1 - MOSFET Characteristics & Inverter' },
            { name: 'Lab ', url: '/ee306/lab3', comment: 'Lab 2 - CMOS VTC & Noise Margins' },
            { name: 'Lab ', url: '/ee306/lab1', comment: 'Lab 3 - CMOS Logic and Speed' },
            { name: 'Lab ', url: '/ee306/lab3', comment: 'Lab 4 - Static & Dynamic CMOS Gates' },
            { name: 'Lab ', url: '/ee306/lab1', comment: 'Lab 5 - Dynamic Storage Devices' },
            { name: 'Lab ', url: '/ee306/lab3', comment: 'Lab 6 - CMOS & TTL Power Dissipation' },
            { name: 'Lab ', url: '/ee306/lab1', comment: 'Lab 7 - Emitter Coupled Logic Gates' },
          ],
        },
      ],
    },
    {
      title: 'EE 261 - Intro C Programming Hardware Emphasis',
      professors: [
        {
          name: 'Bland - Wilson Version:',
          labs: [
            { name: 'Lab 1', url: '/ee306/lab2', comment: 'Lab 1' },
            { name: 'Lab 1', url: '/ee306/lab2', comment: 'Lab 2' },
            { name: 'Lab 1', url: '/ee306/lab2', comment: 'Lab 3' },
            { name: 'Lab 1', url: '/ee306/lab2', comment: 'Lab 4' },
            { name: 'Lab 1', url: '/ee306/lab2', comment: 'Lab 5' },
            { name: 'Lab 1', url: '/ee306/lab2', comment: 'Lab 6' },
          ],
        },
      ],
    },
    // Other card objects
  ];

  return (
    <div className='card1-grid'>
      {cards.map((card, index) => (
        <div key={index} className='card1'>
          <div className='card1-header'>
            <h2>{card.title}</h2>
          </div>
          <ul className='card1-body'>
            {card.professors.map((professor, index) => (
              <li key={index}>
                {professor.name}
                <ul>
                  {professor.labs.map((lab, index) => (
                    <li class="lab-item" key={index}>
                    <p class="comment">{lab.comment}</p>
                    <p class="link2"><a class="name" href={lab.url}>{lab.name}</a> </p>
                </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Cards;
