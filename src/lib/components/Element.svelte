<script>
  import { elements, opc } from '../store/stores';

  export let item;

  const remove = id => {
    elements.delete(id);
    opc.mostrar({
      texto: 'Element eliminado',
      color: 'bg-danger',
      estado: true
    });
  };

  const edit = id => {
    elements.put(id);
    opc.mostrar({
      texto: 'Element editado',
      color: 'bg-warning',
      estado: true
    });
  };

  const classIcono = valor => (valor ? 'bi bi-arrow-clockwise' : 'bi bi-check2');
  const classEstado = valor => (valor ? 'btn-success' : 'btn-warning');
</script>

<div class="shadow my-3 p-3 lead">
  <p class={item.estado ? 'text-decoration-line-through' : ''}>
    {item.texto}
  </p>

  <button class="btn btn-sm {classEstado(item.estado)}" on:click={edit(item.id)} title="Update">
    <i class={classIcono(item.estado)} />
  </button>

  <button class="btn btn-sm btn-danger" title="Remove" on:click={remove(item.id)}>
    <i class="bi bi-trash" />
  </button>
</div>
