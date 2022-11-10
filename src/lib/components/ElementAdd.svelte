<script>
  import { elements, opc } from '../store/stores';

  let todo = { id: '', texto: '', estado: false };

  const addTodo = () => {
    if (!todo.texto.trim()) {
      todo.texto = '';
      return;
    }

    todo.id = Date.now();

    //Store
    elements.add(todo);

    todo = { id: '', texto: '', estado: false };

    opc.mostrar({
      texto: 'Todo agregado',
      color: 'bg-primary',
      estado: true
    });
  };
</script>

<form on:submit|preventDefault={addTodo}>
  <input
    type="text"
    placeholder="Enter para agregar todo"
    class="form-control shadow border-0"
    bind:value={todo.texto}
  />
</form>
