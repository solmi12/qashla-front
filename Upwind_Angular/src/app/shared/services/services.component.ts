import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      logo: 'adjust-circle',
      title: 'Turn Key project',
      desc: 'Qashla Medical Company specializes in turnkey projects, managing the entire process.'
    },
    {
      logo: 'circuit',
      title: 'Installation & Comissioning',
      desc: 'Qashla Medical Company offers thorough installation and commissioning services.'
    },
    {
      logo: 'user',
      title: 'Handled By Expert',
      desc: 'These devices are produced by engineers and technicians to produce and develop devices with greater capacity to deal with various health problems'
    },
    {
      logo: 'flower',
      title: 'Discussion For Idea',
      desc: 'Addressing the problem that guides hospitals and health centers with the more advanced devices'
    },
   
    {
      logo: 'arrow-up',
      title: 'Sales Growth Idea',
      desc: 'We seek to be a leader in the field of medical devices and supplies in Tunisia and North Africa'
    }
  ]
}
