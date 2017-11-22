import Realm from 'realm';

const FaveSchema = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'int',
    faved_on: 'date'
  }
};

const realm = new Realm({schema: [FaveSchema]});


export const queryFaves = () => {
  return realm.objects('Fave');
}

export const deleteFave = (faveID) => {
  let fave = realm.objects('Fave').filtered('id == $0', faveID);
  try{
    realm.write(() => {
      realm.delete(fave);
    });
  }catch(e){
    console.log(e);
  }
}

export const createFave = (session_id) => {
  try{
    realm.write(() => {
      realm.create('Fave', {id: session_id, faved_on: new Date()});
    });
  }catch(e){
    console.log(e);
  }
}

export default realm;