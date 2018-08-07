var AFRAME;

AFRAME.registerComponent('tree', {
  schema: {
    height: {type: 'number', default: 9},
    crown: {type: 'number'},
    trunk: {type: 'number'}
  },

  init: function () {
    let trunk = document.createElement('a-cylinder');
    trunk.setAttribute('radius', this.data.trunk == 0 ? this.data.height / 30 : this.data.trunk);
    trunk.setAttribute('height', this.data.height * 5/9);
    trunk.setAttribute('color', "#554");
    trunk.object3D.position.y += this.data.height * 5/18;
    this.el.appendChild(trunk);

    let crown = document.createElement('a-cone');
    crown.setAttribute('radius-bottom', this.data.crown == 0 ? this.data.height * 2/9 : this.data.crown);
    crown.setAttribute('height', this.data.height * 4/9);
    crown.setAttribute('color', "#6d4");
    crown.object3D.position.y += this.data.height * 7/9;
    this.el.appendChild(crown);        
  }
});