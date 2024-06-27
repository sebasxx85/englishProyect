import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
 
  
  title = "My Practice Test";
  codPrograma = "Ingreso Plataforma";
  // sucursal = localStorage.getItem('Sucursal') || '';
  // DEFAULT_COD_SUCURSAL = JSON.parse(this.sucursal);
  nombreSucursal = ''
  
  dataTable = []
  form!: FormGroup
  loading = false
  today = new Date();

  estadoProceso = [
    { label: 'Recepcionado', value: 'REC' },
    { label: 'Finalizado', value: 'FIN' },
    { label: 'En Proceso', value: 'EPR' },
    { label: 'Anulado', value: 'ANU' },
  ] 

  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor(private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.initForm();

    // cualquier cambio el formulario se resetea la tabla
    this.form.valueChanges.pipe(


    ).subscribe({
      next: data => {
        this.dataTable = [];
      }
    })

  }

  initForm() {
    this.form = this.fb.group({
      codSucursal: [''],
      idAmbulatorio: [''],
      fechaInicio: [this.today.toISOString().split('T')[0]],
      fechaTermino: [''],
      codUnidadEnvio: [''],
      especialidad: [''],
      codTipoBiopsia: [''],
      codDeriva: [''],
    })
  }

  buscarPuntaje(){}

  // buscarTrazabilidad() {

  //   const form = this.form.getRawValue();

  //   this.loading = true;
  //   this.rxp047CService.getTrazabilidadMuestrasByPaciente({
  //     idAmbulatorio: form.idAmbulatorio ? form.idAmbulatorio : 0,
  //     idAtencion: form.idAtencion ? form.idAtencion : 0,
  //     tipoPaciente: form.tipoPaciente,
  //     fechaInicio: moment(form.fechaInicio).format('DD/MM/YYYY'),
  //     fechaTermino: moment(form.fechaTermino).format('DD/MM/YYYY'),
  //     estadoProceso: 'REC',
  //     codFamilia: form.especialidad ? form.especialidad : 0,
  //     codTipobiopsia: form.codTipoBiopsia ? form.codTipoBiopsia : 0,
  //     nroCarton: form.nroCarton ? form.nroCarton : 0,
  //     codUnidadEnvio: form.codUnidadEnvio ? form.codUnidadEnvio : 0,

  //     codDeriva: form.codDeriva ? form.codDeriva : 0,
  //   }).pipe(
  //     finalize(() => this.loading = false)
  //   ).subscribe((data: any) => {
  //     if (data.codRespuesta === 0) {

  //       this.dataTable = data.muestras as any[];
  //       this.form.patchValue(this.dataTable);
  //     }
  //   })
  // }


  // seleccioneUnidad(cod: number) {
  //   this.form.get('codUnidadEnvio').setValue(cod);
  // }

  // onSelecteCodSucursal(event: Sucursal) {
  //   this.form.get('codSucursal').setValue(event.codSucursal);
  // }


  resetAll() {
    this.form.reset({
     // codSucursal: this.DEFAULT_COD_SUCURSAL,
      tipoPaciente: 'T',
    });
    this.dataTable = [];
  }

  ngOnDestroy(): void {
    // this.destroy$.next();
    // this.destroy$.complete();
  }

}
