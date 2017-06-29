var action = process.argv[2];
var param1 = process.argv[3];
var param2 = process.argv[4];

switch(action.toUpperCase())
{
	case 'ADD':

	      console.log(parseInt(param1)+parseInt(param2));
	      break;
	case 'SUBSTRACT':
	      console.log(parseInt(param1)-parseInt(param2));
		  break;
	case 'DIVIDE':
	      console.log(parseInt(param1)/parseInt(param2));
	      break;
	case 'MULTIPLY':
	      console.log(parseInt(param1)*parseInt(param2)); 
	      break;

    default:
          console.log('Invalid action');
}