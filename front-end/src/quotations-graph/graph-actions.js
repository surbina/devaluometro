export const UPDATE_SELECTED_DOMAIN = 'UPDATE_SELECTED_DOMAIN';
export const UPDATE_ZOOM_DOMAIN = 'UPDATE_ZOOM_DOMAIN';

export const fireUpdateSelectedDomain = (selectedDomain) => ({
  type: UPDATE_SELECTED_DOMAIN,
  payload: {
    selectedDomain,
  }
});

export const fireUpdateZoomDomain = (zoomDomain) => ({
  type: UPDATE_ZOOM_DOMAIN,
  payload: {
    zoomDomain,
  }
});
