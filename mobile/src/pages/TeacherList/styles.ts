import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7',
  },

  teacherList: {
    marginTop: -40,
  },

  searchForm: {
    marginBottom: 12,
  },

  label: {
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular',
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  inputBlock: {
    width: '48%'
  },

  input: {
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },

  submitButton: {
    backgroundColor: '#04d361',
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },

  submitButtonText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  },

  empty: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },

  emptyText: {
    color: '#04d361',
    fontSize: 16,
    lineHeight: 26,fontFamily: 'Poppins_400Regular',
  },

  listFooter: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  listFooterText: {
    color: '#04d361',
    fontSize: 16,
    lineHeight: 26,fontFamily: 'Poppins_400Regular',
  }
});

export default styles;