import { GoogleMap } from '@capacitor/google-maps';

const apiKey = '';

window.customElements.define('sample-app', class extends HTMLElement {
   async connectedCallback() {
    this.innerHTML = `
      <style>
        capacitor-google-map {
          display: inline-block;
          width: 200px;
          height: 400px;
        }
      </style>
      <capacitor-google-map id="main-map" style="border: 1px solid red;"></capacitor-google-map>
    `;

    const mapRef = this.querySelector('#main-map');

    const newMap = await GoogleMap.create({
      id: 'main-map',
      forceCreate: true,
      element: mapRef,
      apiKey: apiKey,
      config: {
        center: {
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8,
      },
    });
  }
});
