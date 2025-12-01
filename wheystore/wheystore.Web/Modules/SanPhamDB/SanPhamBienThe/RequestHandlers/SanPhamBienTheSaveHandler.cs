using MyRow = wheystore.SanPhamDB.SanPhamBienTheRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamBienTheSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class SanPhamBienTheSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    ISanPhamBienTheSaveHandler
{
}