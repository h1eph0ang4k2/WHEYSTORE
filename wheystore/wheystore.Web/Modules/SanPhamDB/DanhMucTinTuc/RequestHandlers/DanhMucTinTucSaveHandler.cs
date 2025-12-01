using MyRow = wheystore.SanPhamDB.DanhMucTinTucRow;

namespace wheystore.SanPhamDB;

public interface IDanhMucTinTucSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class DanhMucTinTucSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    IDanhMucTinTucSaveHandler
{
}